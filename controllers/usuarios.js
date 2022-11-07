const {response, request} = require('express');


const usuariosGet= (req= request, res= response) => {
    
    const {q,nombre, apikey} = req.query;
    res.json({
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey
    })
}
const usuariosPost= (req, res= response) => {
    

    const {nombre, edad} = req.body;
    res.json({
        msg: 'post API - Controlador',
        nombre,
        edad
    })
}

const usuariosPut=(req, res) => {

    const id = req.params.id;
    res.json({
        msg: 'put API',
        id
    });
}
const usuariosPatch=(req, res) => {
    res.json({
        msg: 'patch API'
    });
}
const usuariosDelete=(req, res) => {
    res.json({
        msg: 'delete API'
    });
}


module.exports ={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}