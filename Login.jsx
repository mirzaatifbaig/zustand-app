import {Label} from "@/components/ui/label.jsx";
import {Input} from "@/components/ui/input.jsx";
import useUserStore from "@/store/store.jsx";
import {useShallow} from "zustand/shallow";

const Login = () => {
    const {setEmail, setPhone, setAddress, setFullName, setName, setUserName, setAge} = useUserStore(useShallow(
        state => ({
            setEmail: state.setEmail,
            setPhone: state.setPhone,
            setAddress: state.setAddress,
            setFullName: state.setFullName,
            setName: state.setName,
            setUserName: state.setUserName,
            setAge: state.setAge
        })
    ));

    return (
        <div className="space-y-4">
            <div>
                <Label htmlFor="name">Your Name</Label>
                <Input className="text-white" id="name" onChange={e => setName(e.target.value)}/>
            </div>

            <div>
                <Label htmlFor="userName">Your User Name</Label>
                <Input className="text-white" id="userName" onChange={e => setUserName(e.target.value)}/>
            </div>

            <div>
                <Label htmlFor="fullName">Your Full Name</Label>
                <Input className="text-white" id="fullName" onChange={e => setFullName(e.target.value)}/>
            </div>

            <div>
                <Label htmlFor="age">Your Age</Label>
                <Input className="text-white" id="age" type={'number'} onChange={e => setAge(e.target.value)}/>
            </div>

            <div>
                <Label htmlFor="email">Your Email</Label>
                <Input className="text-white" id="email" onChange={e => setEmail(e.target.value)}/>
            </div>

            <div>
                <Label htmlFor="address">Your Address</Label>
                <Input className="text-white" id="address" onChange={e => setAddress(e.target.value)}/>
            </div>

            <div>
                <Label htmlFor="phone">Your Phone</Label>
                <Input className="text-white" id="phone" onChange={e => setPhone(e.target.value)}/>
            </div>
        </div>
    );
};

export default Login;
