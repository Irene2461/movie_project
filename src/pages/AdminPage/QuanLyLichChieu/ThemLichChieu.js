import React from 'react'
import {useDispatch} from 'react-redux';
import {useFormik} from 'formik';
import { DatePicker, Space } from 'antd';
import { themLichChieuAction } from '../../../action/FilmAction';

export default function ThemLichChieu(props) {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues:{
            maPhim: 0,
            ngayChieuGioChieu: '',
            maRap: 0,
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
        formik.setFieldValue('maRap',parseInt(value));
    }
    const changeGiaVe = (e) => {
        let {giaVe,value} = e.target;
        formik.setFieldValue('giaVe',parseFloat(value));
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
                        <DatePicker showTime onChange={changeDate} name="ngayChieuGioChieu" format="YYYY-MM-DDTHH:mm:ss"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={()=>{
                            props.history.goBack();
                        }}> Tro ve</button>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <p>Ma Rap</p>
                        <input className="form-control" name="maRap" onChange={changeMaRap} />
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
