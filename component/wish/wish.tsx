import React from 'react';
import { useRouter } from "next/router";
import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from 'react-player';
import { Button, DatePicker, Radio } from 'antd';

export default function Wish() {
  const query = useRouter();
  const invitedGuests = query.asPath;
  console.log('cek query', invitedGuests);
  return (
    <>
      <div className="container-sm">
        <section className="p-4 m-1">
          <div className="row">
            <div className="tittle mb-4">
              <p className="title-section text-center fs-1 fw-bold">{'Ucapan & Doa'}</p>
              <p className="description-section text-center">Terimakasih banyak atas ucapan doanya. Bantu kami mempersiapkan acara pernikahan dengan mengisi formulir berikut :</p>
            </div>
          </div>
          <div className="row">
            <form>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-3 ">
                  {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address</label> */}
                  <input className="form-input form-control" type="text" placeholder="Nama" aria-label="default input example" />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-3 mb-3">
                  {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address</label> */}
                  <input className="form-input form-control" type="text" placeholder="Hubungan, Cth: Teman, Sahabat, Kerabat" aria-label="default input example" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-12 mb-3">
                {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address</label> */}
                <textarea className="form-input form-control" id="exampleFormControlTextarea1" placeholder="Pesan atau doa"></textarea>
              </div>
              {/* <div className="col-xs-12 col-sm-12 col-md-6 mb-3 col-lg-12">
                <label htmlFor="exampleInputEmail1" className="form-label">Validasi kehadiran ?</label>
                <br />
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label className="form-check-label" htmlFor="inlineRadio1"> Ya</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label className="form-check-label" htmlFor="inlineRadio2">Maaf, Tidak Bisa Hadir</label>
                </div>
              </div> */}
              <div className="d-md-flex justify-content-md-start">
                <button className="btn" type="button" style={{ float: "right" }}>Kirim</button>
              </div>
              {/* <p>{query.name}</p> */}
            </form>
          </div>
        </section>
        {/* <ReactAudioPlayer
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          autoPlay={true}
          controls={false}
          loop={true}
        /> */}
        {/* <ReactAudioPlayer
     src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
     controls
     preload="none"
     autoPlay
  /> */}
      </div>
    </>
  )
}
