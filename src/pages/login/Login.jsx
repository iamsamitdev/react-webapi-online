import AuthLayout from "../../components/layouts/auth/AuthLayout"
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <AuthLayout>
            <form className="card p-4 col-md-4 my-form">
                
                <h3 className="text-center mb-4">เข้าสู่ระบบ</h3>
                
                <div className="mb-3 row">
                    <label htmlFor="username" className="col-md-4 col-form-label">ชื่อผู้ใช้</label>
                    <div className="col-md-8">
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        required
                    />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="password" className="col-md-4 col-form-label">รหัสผ่าน</label>
                    <div className="col-md-8">
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        required
                    />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="submit" className="col-md-4 col-form-label"></label>
                    <div className="col-md-8 btn-action">
                    <input
                        type="submit"
                        className="btn btn-primary"
                        name="submit"
                        id="submit"
                        value="เข้าสู่ระบบ"
                    />
                    </div>
                </div>

                <div className="mb-2 row btn-action">
                    <label htmlFor="" className="col-md-4 col-form-label"></label>
                    <div className="col-md-8"><Link to="/forgotpassword">ลืมรหัสผ่าน ?</Link></div>
                </div>

                <div className="mb-2 row btn-action">
                    <label htmlFor="" className="col-md-4 col-form-label"></label>
                    <div className="col-md-8"><Link to="/register">ลงทะเบียน</Link></div>
                </div>

            </form>
        </AuthLayout>
    )
}

export default Login
