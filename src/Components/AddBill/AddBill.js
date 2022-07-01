import React, { useContext, useState } from 'react'
import { BillContext } from '../../Context/BillContext'
import './AddBill.css'

const AddBill = () => {
    const [billName, setBillName] = useState('')
    const [billAmount, setBillAmount] = useState('')

    const { bills, updateBills, totalbillAmount} = useContext(BillContext)

    const billObjectValid = () => {
      const amountValid = billAmount && Number.parseFloat(billAmount)

      const nameValid = billName && billName.split('').find(char => char !== ' 0')
      return nameValid && amountValid;
    }

    const clearForm = () => {
      setBillName('')
      setBillAmount('')
    }

  return (
    <div className='add-bill-container'>
      <input
        className='add-bill-form-control form-control'
        type='text'
        value={billName}
        placeholder='Enter the billname'
        onChange={(e) => setBillName(e.target.value)}
      />
      <input
        className='add-bill-form-control form-control'
        type='number'
        value={billAmount}
        placeholder='Enter the bill amount'
        onChange={(e) => setBillAmount(e.target.value)}
      />
      <button
        className='add-bill-form-control'
        type='submit'
        onClick={() => {
          if (billObjectValid()) {
            updateBills({
              billName,
              billAmount,
              enabled: true,
            })
          }
          clearForm()
        }}
      > Add Bill </button>
      <div>Total: {  
        totalbillAmount(bills.reduce((acc, bill) => {
          return bill.enabled
            ? Number(acc) + Number(bill.billAmount)
            : Number(acc) 
        }, 0)
        .toFixed(2))
      } </div>
    </div>
  )
}

export default AddBill