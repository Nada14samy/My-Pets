import React , {useState} from "react";
import axios from "axios";
const VerifyEmail=()=>{
    const[otp , setOtp]= useState("");
    const[message , setMessage]= useState("");
    const [accept , setAccept] = useState(false);
    const[loading , setLoading] = useState(false);
    const HandleSubmit = async (e)=>{
        let flag = true;
        e.preventDefault();
        setAccept(true);
        setMessage("");
        if(otp.length === 6 ){
            flag = false;
        }else{
            flag = true;
        }
        try{
            if(flag){
                const res = await axios.patch('customers/verify-email' , { 
                    "token" : otp
                }); 
                console.log(res);
            }
        }catch(err){
            console.log(err);
        }
        finally{
            setLoading(false);
        }
    }
    return(
        <>
            <div className="w-full h-screen flex justify-center items-center">
                <div className="container shadow-lg w-1/4 p-5 rounded-md">
                    <div className="text-center my-4">
                        <h3 className="text-3xl my-4">
                            Email Verification
                        </h3>
                        <p className="text-xs text-opacity-100">
                            We have sent a code to your email
                        </p>
                    </div>
                    <form onSubmit={HandleSubmit} className="flex flex-col justify-center items-center w-full my-3">
                        <input type="number" placeholder="Verify Account..." id="otp" value={otp} className="w-full my-2 px-3 py-2" onChange={(e)=> setOtp(e.target.value)}/>
                        {otp.length === 6 && accept && (<p className="error text-sm">Otp must be then 6 char</p>)}
                        <button className="w-full bg-primary rounded-md py-3 my-2 text-white" disabled={loading}>
                            Verify Account
                            {loading? "Verify Account..." : "Verify Account"}

                            </button>
                        <p>{message}</p>
                    </form>
                    <div className="text-center">
                        <p>Didn't recieve code? <span className="text-darkBlue">Resend OTP</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VerifyEmail;