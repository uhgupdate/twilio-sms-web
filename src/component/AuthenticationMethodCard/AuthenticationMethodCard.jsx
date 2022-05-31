import "./AuthenticationMethodCard.css"
import {AuthenticationMethod} from "../../context/AuthenticationProvider";

const AuthenticationMethodCard = ({onChange=()=>{}}) => (
  <div className="text-center">
      <div className="authentication-method-card-header">
        Choose your Twilio authentication method:
      </div>
      <button className="authentication-method-card-method-btn btn btn-secondary"
              onClick={e => onChange(AuthenticationMethod.AUTH_TOKEN)}>
        AuthToken
      </button>

      <div className="authentication-method-card-divider">
        <hr/>or<hr/>
      </div>

      <button className="authentication-method-card-method-btn btn btn-primary"
              onClick={e => onChange(AuthenticationMethod.API_KEY)}>
        Api Key
      </button>
  </div>
)

export default AuthenticationMethodCard
