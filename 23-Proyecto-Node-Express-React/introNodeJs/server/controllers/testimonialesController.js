const Testimonial = require('../models/Testimoniales');

exports.mostrarTestimoniales = async (req, res) => {
    const testimoniales = await Testimonial.findAll();
    res.render('testimoniales', {
        pagina: "Testimoniales",
        testimoniales
    });
}

exports.agregarTestimonial = async (req, res) => {
    // Validar que todos los campos esten llenos
    let {nombre, correo, mensaje } = req.body;
    let errores = [];

    if(!nombre){
        errores.push({'mensaje': 'Agrega tu nombre'});
    }
    if(!correo){
        errores.push({'mensaje': 'Agrega tu Correo'});
    }
    if(!mensaje){
        errores.push({'mensaje': 'Agrega tu Mensaje'});
    }

    // Revisar Errores
    if(errores.length > 0) {
        
        const testimoniales = await Testimonial.findAll();

        // muestra la vista con errores
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje,
            pagina: 'Testimoniales',
            testimoniales
        });

    } else {
        // Almacena en la BD
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(testimonial => res.redirect('/testimoniales'))
        .catch(error => console.error)
    }
}