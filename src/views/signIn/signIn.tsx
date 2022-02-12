import React,{useState} from 'react';
import style from './signIn.module.scss'
import message from '../../assets/img/mail.png'
import api from '../../api/auth'
import { useAppDispatch,useAppSelector } from '../../store/hooks'
import { setUser,setError,authRequest,authFailure, } from '../../store/user';
import { saveToken,saveUserImage } from '../../helpers/storage';



function SignIn() {

	const [ email, setEmail ] = useState("")
	const [ password, setPassword ] = useState("");
	const dispatch = useAppDispatch()

	const login = async (e:any) =>{
		e.preventDefault()
		const data = { email,password }
		

		try{
			const response = await api.login(data)
			console.log(response)
			const userDetails = {
				userImg :  response.data.User.userImage,
            	token : response.data.token,
            	_id : response.data.User._id
            
			}
			dispatch( setUser(userDetails) )
			saveToken(response.data.token)
		}catch(err){

		}
	}



  	return (
    <div className={style.signup}>
		<h3>Welcome back !</h3>
		<form onSubmit={(e)=>login(e)} className={style.form} action="">
			<div className={style.inputWrap}>
				<input onChange={(e)=>setEmail(e.target.value)}  placeholder='makinde1034@gmail.com' required type="text" />
				<img src={message} alt="" />
			</div>
			<div className={style.inputWrap}>
				<input onChange={(e)=>setPassword(e.target.value)} placeholder='*******' required  type="password" />
			</div>
			<button>Sign in</button>
		
		</form>
    </div>
  
  )
}

export default SignIn;
