import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.jsx";
import {Button} from "@/components/ui/button.jsx";
import {CircleX, UserIcon} from "lucide-react";
import useUserStore from "@/store/store.jsx";
import {useShallow} from "zustand/shallow";
import {Label} from "@radix-ui/react-label";
import {Input} from "@/components/ui/input.jsx";
import {useState} from "react";

const User = () => {
    const {fullName, address, setAddress, userName, resetUser} = useUserStore(useShallow(state => ({
        address: state.address,
        setAddress: state.setAddress,
        fullName: state.fullName,
        userName: state.userName,
        fetchUser: state.fetchUser,
    })));
    const [open, setOpen] = useState(false); // Manage popover state
    return (
        <div className="dark bg-zinc-800 hover:bg-zinc-600 p-4 rounded transition-all duration-200">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="secondary" size="icon">
                        <UserIcon/>
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className="dark overflow-y-scroll space-y-2 w-96 bg-zinc-800 border border-border shadow-md rounded-lg">
                    <div className="flex gap-2 items-center">
                        <p className="text-white">{fullName}</p>
                        <p className="text-white">{userName}</p>
                        <Button onClick={resetUser} variant="destructive" size="icon">
                            <CircleX/>
                        </Button>
                    </div>

                    <div>
                        <Label className={"text-white"} htmlFor="address">Your Address</Label>
                        <Input className="text-white" id="address" value={address}
                               onChange={e => setAddress(e.target.value)}/>
                    </div>
                    <div className="flex text-white bg-zinc-800 justify-end">
                        <Button className={"bg-zinc-700"} onClick={() => {
                            setOpen(false)
                        }}>Save</Button>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default User;
