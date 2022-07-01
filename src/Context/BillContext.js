import React, { useState, createContext, useEffect } from 'react'

const BillContext = createContext();

const BillProvider = ({children}) => {
  const [bills, setBills] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    setBills(JSON.parse(localStorage.getItem('root-bills'))||[])
  }, [setBills])

  useEffect(() => {
    console.log(bills)
  }, [bills]) 

  const totalbillAmount = (totalBills) =>{
    setTotal(totalBills)
    return total
  }

  const alphabeticalOrder = (bills) => {
    return bills.sort((a,b)=>
      a.billName.toUpperCase() < b.billName.toUpperCase() ? -1 : 0
    )
  }

  const updateBills = (bill) => {
    const updatedBills = alphabeticalOrder([
      ...bills,
      bill
    ]);
    localStorage.setItem('root-bills', JSON.stringify(updatedBills))
    setBills(updatedBills)
  }

  const editBill = (billToUpdate) => {
     const billsFiltered = bills.filter((bill)=> bill.billName !== billToUpdate.billName)
     const updatedBills = alphabeticalOrder([
      ...billsFiltered, 
      billToUpdate
    ])
     localStorage.setItem('root-bills', JSON.stringify(updatedBills))
     setBills(updatedBills)
  }

  return (
    <BillContext.Provider
      value={{
        bills,
        totalbillAmount,
        updateBills,
        editBill,
      }}
    >
      {children}
    </BillContext.Provider>
  )
}

export {
  BillContext,
  BillProvider
}
