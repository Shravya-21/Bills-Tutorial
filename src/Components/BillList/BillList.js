import React, { useContext } from 'react'
import { BillContext } from '../../Context/BillContext'
import './BillList.css'

const BillList = () => {
  const { bills, editBill } = useContext(BillContext)
  return (
    <div className='bill-list-container'>
      {
        bills.map((bill, index)=> {
            return(
                <div key={index} className='bill-list-row'>
                    <input 
                     type='checkbox'
                     className='form-check-input'
                     checked={bill.enabled}
                     onChange={()=>editBill({
                        billName: bill.billName,
                        billAmount: bill.billAmount,
                        enabled: !bill.enabled
                     })
                     }
                     />
                     <div className='bill-list-row-content'>
                        {bill.billName} - {bill.billAmount}
                    </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default BillList