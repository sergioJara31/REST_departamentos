const express= require('express');
const routes= express.Router();

const departaments= require('../json/departaments.json');


routes.get('/',(req,res)=>{
    res.json(departaments);
});

/* consultar los municipios de un departamento especifico en una ruta */

routes.get('/:departamentId',(req,res)=>{
    const {departamentId}=req.params;
    const municipalities = departaments.filter(
        (departament)=>departament['c_digo_dane_del_departamento'] === departamentId
        );
        res.json(municipalities);
})


/* punto 1 */

routes.get('/tarea/punto_1', (req, res)=>{
  const dep = departaments.filter(
    (departament)=>departament['c_digo_dane_del_departamento'] > '15' && departament['c_digo_dane_del_departamento'] < '20'
    );

    res.json(dep);
  });


  /* punto 2 */
  routes.get('/tarea/punto_2/departaments', (req, res)=>{
    const {depId} = req.query;

    if (depId) {
      const dep = departaments.filter(
        (departament)=>departament['c_digo_dane_del_departamento'] === depId
        );
        res.json(dep);
      }else{
        res.json(departaments)
    }
    });


/* punto 3 */
routes.get('/tarea/punto_3/municipio', (req, res)=>{
const {nombreMunicipio} = req.query;

if (nombreMunicipio){
    const mun = departaments.filter(
      (departament)=>departament['municipio'] === nombreMunicipio
      );
      res.json(mun);
    }else{
    const munCaldas = departaments.filter(
        (departament)=>departament['departamento'] === "Caldas"
        );
        res.json(munCaldas);

    }
  });


/* punto 4 */

routes.get('/tarea/punto_4/:inicial', (req, res)=>{
  const {inicial} = req.query;
  const dep = departaments.filter(
    (departament)=>departament['departamento'].charAt(0) === "C"
    );
    res.json(dep);
  })





module.exports = routes;

