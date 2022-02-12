import React,{useState} from 'react';
import style from './signUp.module.scss'
import message from '../../assets/img/mail.png'
import Ripples from 'react-ripples'
import api from '../../api/auth'
import { useAppDispatch,useAppSelector } from '../../store/hooks'
import { setUser,setError,authRequest,authFailure, } from '../../store/user';
import { useNavigate } from 'react-router-dom'
import Preloader from '../../components/prealoder/preloader';
import { saveToken,saveUserImage } from '../../helpers/storage';


function SignUp() {

	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const errMsg = useAppSelector((state)=>state.userSlice.errMsg)
	const loading = useAppSelector((state)=> state.userSlice.loading)
	const [email,setEmail] = useState("")
	const [password,setPassword] = useState("") 
	const [userDetails, setUserDetails] = useState({name : "",password : ""})


	const register = (e : any ) =>{
		e.preventDefault()
		const userDetails = {
			email,
			password
		}
		return new Promise ((resolve)=>{
			dispatch(authRequest(true))
				api.register(userDetails).then((res)=>{
				console.log(res)
				saveToken(res.data.accessToken)
				const details = {
					token : res.data.accessToken,
					userDetails : res.data.newUser
				}
				dispatch(setUser(details) )
				navigate("dashboard");
			}).catch((err)=>{
				dispatch(setError(err.response.data.message));
				dispatch(authFailure(false))

			})
		})
		

		

	}

  return (
		<div className={style.signup}>
			<h3>Get started now</h3>
			<p>Signup to see moments from your favorite football,movie review shows.</p>
			<form onSubmit={(e)=>register(e)} className={style.form} action="">
				<div className={style.inputWrap}>
					<input onChange={(e)=>setEmail(e.target.value)} value={email} required placeholder='makinde1034@gmail.com' type="text" />
					<img src={message} alt="" />
				</div>
				<div className={style.inputWrap}>
					<input onChange={(e)=>setPassword(e.target.value)} value={password} required placeholder='*******'  type="password" />
				</div>
				<button disabled={loading}>
					{ loading ? <Preloader /> : <p>Sign up</p> }
				</button>
			</form>
			<p className={style.errMsg}>{errMsg}</p>
		</div>
	)
}

export default SignUp;
