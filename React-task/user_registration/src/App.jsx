import React, { useState } from 'react'
import './App.css'
import CreateAcc from './userRegistration/CreateAcc'
import Navbar from './userRegistration/Navbar'
import Qualification from './userRegistration/Qualification'
import PersonInfo from './userRegistration/PersonalInfo'
import Login from './userRegistration/Login'
import { BrowserRouter , Route, Routes, Link } from 'react-router-dom'
import ReviewAndProceed from './userRegistration/ReviewAndProceeed'

function App() {
  const [formData, setFormData] = useState(
    {
          firstName: "Pratik", 
          lastName: "Harde", 
          email: "pratik@gmail.com", 
          phoneNo:"95275414115",
          url:"ppp.com",
          inDes:true,
          soEng:true,
          soQuEng:"",
          referral:"",
          jobUpdate:"true",
          percentage:"25",
          year_pass:"2023",
          qualification:"CS",
          stream:"CE",
          college:"PICT",
          location:"Pune",
          experience:"Experienced",
          year_experience:"2",
          c_ctc:"6",
          e_ctc:"8",
          javascript:true,
          angular:true,
          react:"",
          nodeJs:"",
          other:"",
          notice_period:true,
          np_end:"26/8/2023",
          np_dur:"3",
          zeus_test:"Yes"
    })
    function handleChange(par){
      // console.log(par.target.value)
      const {name, value, type, checked} = par.target
      setFormData(prevFormData => {
          return {
              ...prevFormData,
              [name]: type==="checkbox" ? checked : value
          }
      })
  }
  // console.log(formData)
  const [personalInfo, setPersonalInfo] = useState(false)
  const [qualifications, setQualifications] = useState(false)
  const [reviewProceed, setReviewProceed] = useState(false)

  function personalToggle(){
    setPersonalInfo(prevVal => !prevVal)
  }
  function qualificationToggle(){
    setPersonalInfo(prevVal => !prevVal)
  }
  function reviewProceedToggle(){
    setReviewProceed(prevVal => !prevVal)
  }
  return (
    <>
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Login data={personalInfo} toggle={personalToggle}/>}/>

          <Route path="/personal" element={
          <React.Fragment>
            <Navbar />
            <CreateAcc personal={personalInfo}  qualification={qualifications} />
            <PersonInfo toggle={qualificationToggle}/>
          </React.Fragment>
          }/>
          
          <Route path="/qualification" element={
          <React.Fragment>
            <Navbar />
            <CreateAcc personal={personalInfo} qualification={qualifications} review={reviewProceed}/>
            <Qualification data={formData} handleChangeee={handleChange} toggle={reviewProceedToggle}/>
          </React.Fragment>
          }/>

          <Route path="/review" element={
          <React.Fragment>
            <Navbar />
            <CreateAcc personal={personalInfo} qualification={qualifications} review={reviewProceed}/>
            <ReviewAndProceed data={formData} />
          </React.Fragment>
          }/>
          {/* <Route path="/navbar" element={<Navbar />}/> */}
        </Routes>
      </main>
    </BrowserRouter>
      {/* <Login /> */}
      {/* <Navbar />
      <CreateAcc /> */}
        {/* <PersonInfo setFormData={setFormData} handleChangeee={handleChange}/> */}
        {/* <Qualification data={formData} handleChangeee={handleChange}/> */}

        {/* <Qualification data={formData} handleChangeee={handleChange}/> */}
        {/* <ReviewAndProceed data={formData}/> */}
    </>
  )
}

export default App
