import React from "react";

const Post = (props) => {
    return (
        <div className="artikel">
            <div className="row">
                <div className="col-sm-3">
                    <div className="gambar-artikel">
                        <img src="https://subhsambandh.com/assets/frontend/images/user.png" alt="Gambar Tumbnail Artikel" />
                    </div>
                </div>
                <div className="col-sm-9">
                    <div className="konten-artikel">
                        <p></p>
                        <b>NIM:</b>
                        <div className="judul-artikel">{props.nim}</div>
                        <b>Nama   :</b>
                        <div className="judul-artikel">{props.nama}</div>
                        <b>Alamat :</b>
                        <div className="judul-artikel">{props.alamat}</div>
                        <b>Hp :</b>
                        <div className="judul-artikel">{props.hp}</div>
                        <b>Angkatan :</b>
                        <div className="judul-artikel">{props.angkatan}</div>
                        <b>Status :</b>
                        <div className="judul-artikel">{props.status}</div>
                        <p></p>
                        <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post;