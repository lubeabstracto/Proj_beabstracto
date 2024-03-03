import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import MyPasteComponent from '../components/MyPasteCOmponent';
import ReadAlso from '../components/ReadAlso';
import SOPDoc from '../components/SOPDoc.jsx';
import SOPList from '../components/SOPList';


const SOP = () => {
  return (
    <>
    <MyPasteComponent/>
        <SOPDoc />
        <ReadAlso/>
    </>
  )
}

export default SOP