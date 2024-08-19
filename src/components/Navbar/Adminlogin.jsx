import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logologin.jpeg';

function Adminlogin({ close }) {
  const [adminid, setAdminid] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showDialog, setShowDialog] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleValidation = () => {
    const newErrors = {};

    if (!adminid) newErrors.adminid = true;
    if (!password) newErrors.password = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!handleValidation()) return;

    try {
      console.log("Sending request to /admin");
      const response = await axios.get('http://localhost:8082/admin/');
      console.log("Response data:", response.data);

      // Check if adminData is an array
      if (Array.isArray(response.data)) {
        const admin = response.data.find(
          (admin) => admin.adminid === adminid && admin.password === password
        );
        
        if (admin) {
          alert('Login successful');
          navigate('/hastle/dasbord');
        } else {
          alert('Invalid admin ID or password.');
        }
      } else {
        console.error("Unexpected data format:", response.data);
        alert('An unexpected error occurred.');
      }
    } catch (error) {
      console.error("Error fetching admin data:", error.response || error.message || error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleChangePassword = async () => {
    const data = {
      adminId: adminid,
      newPassword: newPassword
    };

    try {
      await axios.put('http://localhost:8082/admin/', data); // Update the endpoint if needed
      console.log("Success");
      alert("Password changed successfully");
      setNewPassword("");
      setShowDialog(false);
    } catch (error) {
      console.error("Error changing password:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="bg-white font-[sans-serif] min-h-screen flex flex-col items-center justify-center py-6 px-4 relative">
      <div className="max-w-md w-full border p-8 rounded-md bg-gray-200">
        <button 
          onClick={close} 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <FaTimes />
        </button>
        <div className="text-center">
          <img src={logo} className='h-[150px] w-[150px] rounded-full ml-6 p-2' alt="Logo"/>
        </div>

        <form className="mt-12 space-y-4" onSubmit={(e) => {
          e.preventDefault();
          if (handleValidation()) {
            handleLogin();
          }
        }}>
          <div className="relative flex items-center">
            <input 
              name="id" 
              type="text" 
              required 
              className="w-full text-sm text-gray-800 bg-white border-2 border-transparent focus:border-[#1E2772] px-4 py-3 rounded-md outline-none" 
              placeholder="Enter AdminID" 
              onChange={(e) => {
                setAdminid(e.target.value);
                setErrors((prev) => ({ ...prev, adminid: false }));
              }}
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
              <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
              <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
            </svg>
          </div>

          <div className="relative flex items-center">
            <input 
              name="password" 
              type={showPassword ? 'text' : 'password'} 
              required 
              className="w-full text-sm text-gray-800 bg-white border-2 border-transparent focus:border-[#1E2772] px-4 py-3 rounded-md outline-none" 
              placeholder="Enter password" 
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prev) => ({ ...prev, password: false }));
              }}
            />
            <svg
              onClick={togglePasswordVisibility}
              xmlns="http://www.w3.org/2000/svg"
              fill="#bbb"
              stroke="#bbb"
              className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
              viewBox="0 0 128 128"
            >
              <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
            </svg>
          </div>

          <p 
            className='text-[#800080] cursor-pointer'
            onClick={() => setShowDialog(true)}
          >
            Forgot password
          </p>

          <div className="!mt-12">
            <button 
              type="button" 
              className="w-full py-2.5 px-4 text-base font-semibold rounded-md text-white bg-[#800080] hover:bg-[#1e4272] focus:outline-none"
              onClick={handleLogin}
            >
              Log in
            </button>
          </div>
        </form>
      </div>

      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="text-lg font-semibold mb-4">Change Password</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter your ID"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                value={adminid}
                onChange={(e) => setAdminid(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="New Password"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleChangePassword}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Change
              </button>
              <button
                onClick={() => setShowDialog(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Adminlogin;
