/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import MailboxForm from "./components/MailboxForm"
import MailboxList from "./components/MailboxList"
import MailboxDetails from "./components/MailboxDetails"
import "./App.css"
const App = () => {
  const [mailboxes, setMailboxes] = useState([])

  const addBox = (newMailbox) => {
    const newId = mailboxes.length ? mailboxes[mailboxes.length - 1]._id + 1 : 1
    setMailboxes([...mailboxes, { ...newMailbox, _id: newId }])
  }

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <h1>Post Office</h1>
              </main>
            }
          />
          <Route
            path="/mailboxes"
            element={<MailboxList mailboxes={mailboxes} />}
          />
          <Route
            path="/new-mailbox"
            element={<MailboxForm addBox={addBox} />}
          />
          <Route
            path="/mailboxes/:mailboxId"
            element={<MailboxDetails mailboxes={mailboxes} />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
