import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className='container border-top mt-5'>
        <div className='row mt-5'>
          <div className='col'>
            <img src='images/BullChain Logo.png' alt='BullChain Logo' style={{ width: "50%" }} />
            <p className='text-muted mt-3' style={{ fontSize: "12px" }}>
              &copy; 2010 - 2025, BullChain Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className='col'>
            <p className='fs-5'>Account</p>
            <a href='' className='d-block mb-2'>Open demat account</a>
            <a href='' className='d-block mb-2'>Minor demat account</a>
            <a href='' className='d-block mb-2'>NRI demat account</a>
            <a href='' className='d-block mb-2'>Commodity</a>
            <a href='' className='d-block mb-2'>Dematerialisation</a>
            <a href='' className='d-block mb-2'>Fund transfer</a>
            <a href='' className='d-block mb-2'>MTF</a>
            <a href='' className='d-block mb-2'>Referral program</a>
          </div>

          <div className='col'>
            <p className='fs-5'>Support</p>
            <a href='' className='d-block mb-2'>Contact us</a>
            <a href='' className='d-block mb-2'>Support portal</a>
            <a href='' className='d-block mb-2'>How to file a complaint?</a>
            <a href='' className='d-block mb-2'>Status of your complaints</a>
            <a href='' className='d-block mb-2'>Bulletin</a>
            <a href='' className='d-block mb-2'>Circular</a>
            <a href='' className='d-block mb-2'>Z-Connect blog</a>
            <a href='' className='d-block mb-2'>Downloads</a>
          </div>

          <div className='col'>
            <p className='fs-5'>Company</p>
            <a href='' className='d-block mb-2'>About</a>
            <a href='' className='d-block mb-2'>Philosophy</a>
            <a href='' className='d-block mb-2'>Press & media</a>
            <a href='' className='d-block mb-2'>Careers</a>
            <a href='' className='d-block mb-2'>BullChain Cares (CSR)</a>
            <a href='' className='d-block mb-2'>BullChain.tech</a>
            <a href='' className='d-block mb-2'>Open source</a>
          </div>

          <div className='col'>
            <p className='fs-5'>Quick links</p>
            <a href='' className='d-block mb-2'>Upcoming IPOs</a>
            <a href='' className='d-block mb-2'>Brokerage charges</a>
            <a href='' className='d-block mb-2'>Market holidays</a>
            <a href='' className='d-block mb-2'>Economic calendar</a>
            <a href='' className='d-block mb-2'>Calculators</a>
            <a href='' className='d-block mb-2'>Markets</a>
            <a href='' className='d-block mb-2'>Sectors</a>
          </div>
        </div>

        <div className=' text-muted mt-4' style={{ fontSize: "12px" }}>
          <p>
            BullChain Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: xxxxxxxxxx
            CDSL/NSDL: Depository services through BullChain Broking Ltd. – SEBI Registration no.: xxxxxxxx
            Commodity Trading through BullChain Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: xxxxxxxx
            .
          </p>
          <p>
            For any complaints pertaining to securities broking please write to <a href='mailto:complaints@BullChain.com'>complaints@BullChain.com</a>,
            for DP related issues write to <a href='mailto:dp@BullChain.com'>dp@bullchain.com</a>.
            Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
            Mandatory details: Name, PAN, Address, Mobile Number, Email ID. Benefits: Effective Communication, Speedy redressal of grievances.
          </p>
          <p>
            <a href='' style={{ color: "blue" }}>
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </a>
          </p>
          <p>
            Investments in the securities market are subject to market risks; read all the related documents carefully before investing.
          </p>
          <p>
            <strong>Attention investors:</strong><br />
            1) Stock brokers can accept securities as margins only by way of pledge in the depository system w.e.f September 01, 2020.<br />
            2) Update your email and phone number with your stock broker / depository participant and receive OTP directly from depository to create pledge.<br />
            3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.<br /><br />
            "Prevent unauthorized transactions in your account. Update your mobile numbers/email IDs with your stock brokers. 
            Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. 
            KYC is one-time – once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), 
            you need not undergo the same process again when you approach another intermediary."<br /><br />
            Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. 
            Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. 
            In case of non-allotment, the funds will remain in your bank account. <strong>As a business we don't give stock tips, 
            and have not authorized anyone to trade on behalf of others.</strong> 
            If you find anyone claiming to be part of BullChain and offering such services, please create a ticket here.
          </p>
        </div>
        <div className='d-flex justify-content-center  mb-4' style={{ fontSize: "12px", fontWeight: "bold" }}>
          <a className='m-2 text-muted' href=''>NSE</a>
          <a className='m-2 text-muted' href=''>BSE</a>
          <a className='m-2 text-muted' href=''>MCX</a>
          <a className='m-2 text-muted' href=''>Terms & conditions</a>
          <a className='m-2 text-muted' href=''>Policies & procedures</a>
          <a className='m-2 text-muted' href=''>Privacy policy</a>
          <a className='m-2 text-muted' href=''>Disclosure</a>
          <a className='m-2 text-muted' href=''>For investor's attention</a>
          <a className='m-2 text-muted' href=''>Investor charter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
