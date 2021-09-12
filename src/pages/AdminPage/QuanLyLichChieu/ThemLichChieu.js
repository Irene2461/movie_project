import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useFormik} from 'formik';
import {NavLink} from 'react-router-dom';
import { DatePicker, Space, Tabs } from 'antd';
import { layThongTinCumRapTheoHeThong, themLichChieuAction } from '../../../action/FilmAction';



export default function ThemLichChieu(props) {
    const {danhSachHeThongRap,thongTinChiTiet} = useSelector(state=>state.FilmReducer);
    const dispatch = useDispatch();
    let maHeThongRap = 'BHDStar';
    useEffect(()=>{
        const action = layThongTinCumRapTheoHeThong(maHeThongRap);
        dispatch(action);
    },[])
    const formik = useFormik({
        initialValues:{
            maPhim: 0,
            ngayChieuGioChieu: '',
            maHeThongRap: 0,
            giaVe: 0

        },
        onSubmit:(values)=>{
            console.log(values);
            let formData = new FormData();
            for (let key in values){
                formData.append(key,values[key]);
            }
            dispatch(themLichChieuAction(formData));
        }
    });

    const changeMaPhim = (e) => {
        let {maPhim,value} = e.target;
        formik.setFieldValue('maPhim',parseInt(value));
    }
    const changeDate = (value,dateString) =>{
        console.log('Formatted Selected Time: ', dateString);
        formik.setFieldValue('ngayChieuGioChieu',dateString);
    }
    const changeMaRap = (e) => {
        let {maRap,value} = e.target;
        formik.setFieldValue('maHeThongRap',parseInt(value));
    }
    const changeGiaVe = (e) => {
        let {giaVe,value} = e.target;
        formik.setFieldValue('giaVe',parseFloat(value));
    }
    const renderRap = () => {
        return danhSachHeThongRap.map((film,index)=>{
            return film.danhSachRap.map((rap,index)=>{
                return <option value={rap.maRap}>{rap.maRap}</option>
            })
        })
    }
    const changeMaHeThongRap = (e) =>{
        let {maHeThongRap,value} = e.target.value;
        formik.setFieldValue('maHeThongRap',parseInt(value));
    }
    const handleChangeSelect = (e) => {
        console.log("hhh: ", e.target.value);
        formik.setFieldValue('maHeThongRap',parseInt(e.target.value));
    }


    return (
        <form className="container" onSubmit={formik.handleSubmit}>
            <h3>Them Lich Chieu</h3>
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <p>Ma Phim</p>
                        <input className="form-control" name="maPhim" onChange={changeMaPhim} />
                    </div>
                    <div className="form-group">
                        <p>Ngày chiếu - Giờ chiếu</p>
                        <DatePicker showTime onChange={changeDate} name="ngayChieuGioChieu" format="DD-MM-YYYY HH:mm:ss"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={()=>{
                            props.history.goBack();
                        }}> Tro ve</button>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        {/* <p>Ma He Thong Rap</p> */}
                        <p>Hệ thống rạp</p>
                        <button onClick={()=>{
                            maHeThongRap = 'CGV';
                            dispatch(layThongTinCumRapTheoHeThong(maHeThongRap));
                        }} className='btn btn-danger'>CGV</button>
                        <button onClick={()=>{
                            maHeThongRap = 'Cinestar';
                            dispatch(layThongTinCumRapTheoHeThong(maHeThongRap));
                        }} className='btn btn-success'>Cinestar</button>
                        <button onClick={()=>{
                            maHeThongRap = 'Galaxy';
                            dispatch(layThongTinCumRapTheoHeThong(maHeThongRap));
                        }} className='btn btn-primary'>Galaxy</button>
                        <button onClick={()=>{
                            maHeThongRap = 'LotteCinima';
                            dispatch(layThongTinCumRapTheoHeThong(maHeThongRap));
                        }} className='btn btn-secondary'>LotteCinema</button>
                        <button onClick={()=>{
                            maHeThongRap = 'MegaGs';
                            dispatch(layThongTinCumRapTheoHeThong(maHeThongRap));
                        }} className='btn btn-warning'>MegaGs</button>

                        <select onChange={handleChangeSelect} name="maHeThongRap" className="form-control">
                            <option value="none">Chọn mã rạp</option>
                            {renderRap()}
                        </select> 

                        {/* <input className="form-control" name="maHeThongRap" onChange={} /> */}
                    </div>  
                    <div className="form-group">
                        <p>Gia Ve</p>
                        <input className="form-control" name="giaVe" onChange={changeGiaVe} />
                    </div>  
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Them lich chieu</button>
                    </div>  
                </div>
            </div>
        </form>
    )
}
