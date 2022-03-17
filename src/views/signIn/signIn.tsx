import React,{useState} from 'react';
import style from './signIn.module.scss'
import message from '../../assets/img/mail.png'
import api from '../../api/auth'
import { useAppDispatch,useAppSelector } from '../../store/hooks'
import { setUser,setError,authRequest,authFailure } from '../../store/user';
import { setAuth } from '../../store/auth';
import { saveToken,saveUserImage,saveUserId } from '../../helpers/storage';
import Preloader from '../../components/prealoder/preloader';
import { useNavigate } from 'react-router-dom'
import eye from '../../assets/img/eyes.png'
import closedEye from '../../assets/img/visibility.png'
// import Preloader from '../../components/prealoder/preloader';



function SignIn() {

	const [ email, setEmail ] = useState("")
	const [ password, setPassword ] = useState("");
	const [disabled, setDisabled]  = useState(false)
	const [isVisible, setIsVisible] = useState(false)


	const dispatch = useAppDispatch()

	const errorMsg = useAppSelector((state)=>state.userSlice.errMsg);
	const loading = useAppSelector((state)=>state.userSlice.loading);

	const navigate = useNavigate();

	

	const login = async (e:any) =>{
		e.preventDefault()
		const data = { email,password }
		dispatch( authRequest(true) )

		try{
			const response = await api.login(data)
			console.log(response)
			setDisabled(true)
			
			const userDetails = {
				userImg :  response.data.User.userImage,
            	token : response.data.token,
            	_id : response.data.User._id
            
			}
			dispatch( setUser(userDetails) );
			saveToken(response.data.token);
			saveUserId(response.data.User._id);
			dispatch(setAuth(true))
			navigate("/dashboard")

		}catch(err:any){
			console.log(err.response.data.message);
			dispatch( authFailure(false) )
			dispatch( setError(err.response.data.message) )
			setDisabled(false)
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
				<input onChange={(e)=>setPassword(e.target.value)} placeholder='*******' required  type={ isVisible ? "text" : "password" } />
				<img onClick={()=>setIsVisible(!isVisible)} src={ isVisible ? eye : closedEye } alt="" />
			</div>
			<button disabled={ disabled }>
				{ 
					loading ? <Preloader /> : <p>Sign in</p>
				}
			</button> 
		
		</form>
		<p className={style.errorMsg}>{errorMsg}</p>
    </div>
  
  )
}

export default SignIn;
