/*
* @Author: Miguel González Aravena
* @Email: miguel.gonzalez.93@gmail.com
* @Github: https://github.com/MiguelGonzalezAravena
* @Date: 2016-12-05 01:27:53
* @Last Modified by: Miguel GonzÃ¡lez Aravena
* @Last Modified time: 2016-12-06 01:39:41
*/
$(document).ready(function() {
  var tabla = $('#asignaturas').DataTable({
    ajax: 'asignaturas/listarAsignaturas',
    responsive: true,
    dom: 'Bfrtip',
    buttons: [
      {
        text: '<i class="glyphicon glyphicon-plus"></i> Agregar pelicula',
        class: 'btn btn-success',
        action: function (e, dt, node, config) {
          bootbox.dialog({
            title: 'Agregar Asignatura',
            message: '' + 
            '<div class="form-group">' +
              '<div class="input-group">' +
                '<span class="input-group-addon">' +
                  '<i class="glyphicon glyphicon-barcode"></i>' +
                '</span>' +
                '<input type="text" id="agregar_idPelicula" class="form-control" placeholder="ID de Pelicula" required>' +
              '</div>' +
            '</div>' +
            '<div class="form-group">' +
              '<div class="input-group">' +
                '<span class="input-group-addon">' +
                  '<i class="glyphicon glyphicon-star"></i>' +
                '</span>' +
                '<input type="text" id="agregar_nombre" class="form-control" placeholder="Nombre de pelicula" required>' +
              '</div>' +
            '</div>' + 
            '<div class="form-group">' +
              '<div class="input-group">' +
                '<span class="input-group-addon">' +
                  '<i class="glyphicon glyphicon-align-justify"></i>' +
                '</span>' +
                '<input type="text" id="agregar_sinopsis" class="form-control" placeholder="Escriba la sinopsis" required>' +
              '</div>' +
            '</div>' +
            '<div class="form-group">' +
              '<div class="input-group">' +
                '<span class="input-group-addon">' +
                  '<i class="glyphicon glyphicon-facetime-video"></i>' +
                '</span>' +
                '<input type="text" id="agregar_genero" class="form-control" placeholder="Escriba el genero de la pelicula" required>' +
              '</div>' +
            '</div>' +
            '<div class="form-group">' +
              '<div class="input-group">' +
                '<span class="input-group-addon">' +
                  '<i class="glyphicon glyphicon-calendar"></i>' +
                '</span>' +
                '<input type="text" id="agregar_fechaEstreno" class="form-control" placeholder="Agregar fecha de estreno" required>' +
              '</div>' +
            '</div>' +
            '<div class="form-group">' +
              '<div class="input-group">' +
                '<span class="input-group-addon">' +
                  '<i class="glyphicon glyphicon-ok"></i>' +
                '</span>' +
                '<input type="text" id="agregar_arrendada" class="form-control" placeholder="Por defecto debe ser cero (no arrendada)" required>' +
              '</div>' +
            '</div>' + 
            '<div class="form-group">' +
              '<div class="input-group">' +
                '<span class="input-group-addon">' +
                  '<i class="glyphicon glyphicon-th-large"></i>' +
                '</span>' +
                '<input type="text" id="agregar_unidades" class="form-control" placeholder="Ingresa las unidades" required>' +
              '</div>' +
            '</div>',
            buttons: {
              cancel: {
                label: 'Cancelar',
                className: 'btn btn-default',
                callback: function() {
                  bootbox.hideAll();
                }
              },
              ok: {
                label: 'Agregar',
                className: 'btn btn-success',
                callback: function(e) {
                  e.preventDefault();
                  tabla.row.add({
                    "idPelicula": $('#agregar_idPelicula').val(),
                    "nombre": $('#agregar_nombre').val(),
                    "sinopsis": $('#agregar_sinopsis').val(),
                    "fechaEstreno": $('#agregar_fechaEstreno').val(),
                    "genero": $('#agregar_genero').val(),
                    "arrendada": $('#agregar_arrendada').val(),
                    "unidades": $('#agregar_unidades').val()
                  }).draw();

                  $.ajax({
                    url: 'asignaturas/agregar',
                    method: 'post',
                    data: {
                      idPelicula: $('#agregar_idPelicula').val(),
                      nombre: $('#agregar_nombre').val(),
                      sinopsis: $('#agregar_sinopsis').val(),
                      fechaEstreno: $('#agregar_fechaEstreno').val(),
                      genero: $('#agregar_genero').val(),
                      arrendada: $('#agregar_arrendada').val(),
                      unidades: $('#agregar_unidades').val()
                    }
                  })
                  .fail(function(err) {
                    notificacion('Error al agregar la película: ' + err, 'error');
                  })
                  .done(function(data) {
                    notificacion(data.mensaje, 'success');
                  });
                  ;
                }
              }
            }

          });
        }
      }
    ],
    columns: [
      {data: 'idPelicula', title: 'Código'},
      {data: 'nombre', title: 'Nombre'},
      {data: 'sinopsis', title: 'Sinopsis'},
      {data: 'fechaEstreno', title: 'Fecha de Estreno'},
      {data: 'genero', title: 'Género'},
      {data: 'arrendada', title: '¿Arrendada?'},
      {data: 'unidades', title: 'Unidades'},
      {
        render: function(data, type, row, meta) {
          var publicado = row.publicado;
          return '' + 
          '<div class="form-group">' +
            '<div class="btn-group">' +
              '<button type="button" class="btn-editar btn btn-xs btn-primary">' + 
                '<i class="glyphicon glyphicon-pencil"></i> Editar' + 
              '</button>' +
              '<button type="button" class="btn-eliminar btn btn-xs btn-danger">' + 
                '<i class="glyphicon glyphicon-trash"></i> Eliminar' +
              '</button>' + 
            '</div>' +
          '</div>';
        },
        title: 'Opciones',
        orderable: false
      }
    ],
    rowCallback: function(row, data) {
      var $row = $(row);
      $row.find('.btn-editar').unbind('click').on('click', btnEditarEvent);
      $row.find('.btn-eliminar').unbind('click').on('click', btnEliminarEvent);
    },
    order: [[0, 'desc']]
  });

  function btnEditarEvent() {
    var fila = $(this).closest('tr'),
    asignatura = tabla.row(fila).data(),
    id = asignatura.idPelicula,
    nombre = asignatura.nombre,
    sinopsis = asignatura.sinopsis,
    fechaEstreno = asignatura.fechaEstreno,
    genero = asignatura.genero,
    arrendada = asignatura.arrendada,
    unidades = asignatura.unidades
    ;

    console.log('Editar asignatura con id ' + id);
    bootbox.dialog({
      title: 'Editar asignatura',
      message: '' + 
      '<div class="form-group">' +
        '<div class="input-group">' +
          '<span class="input-group-addon">' +
            '<i class="glyphicon glyphicon-tag"></i>' +
          '</span>' +
          '<input type="text" id="editar_nombre" class="form-control" value="' + nombre + '" placeholder="Nombre de la pelicula">' +
        '</div>' +
      '</div>' + 
      '<div class="form-group">' +
        '<div class="input-group">' +
          '<span class="input-group-addon">' +
            '<i class="glyphicon glyphicon-tag"></i>' +
          '</span>' +
          '<input type="text" id="editar_sinopsis" class="form-control" value="' + sinopsis + '" placeholder="Sinopsis">' +
        '</div>' +
      '</div>' + 
      '<div class="form-group">' +
        '<div class="input-group">' +
          '<span class="input-group-addon">' +
            '<i class="glyphicon glyphicon-tag"></i>' +
          '</span>' +
          '<input type="text" id="editar_fechaEstreno" class="form-control" value="' + fechaEstreno + '" placeholder="Fecha estreno">' +
        '</div>' +
      '</div>' + 
      '<div class="form-group">' +
        '<div class="input-group">' +
          '<span class="input-group-addon">' +
            '<i class="glyphicon glyphicon-tag"></i>' +
          '</span>' +
          '<input type="text" id="editar_genero" class="form-control" value="' + genero + '" placeholder="Genero">' +
        '</div>' +
      '</div>' + 
      '<div class="form-group">' +
        '<div class="input-group">' +
          '<span class="input-group-addon">' +
            '<i class="glyphicon glyphicon-tag"></i>' +
          '</span>' +
          '<input type="text" id="editar_arrendada" class="form-control" value="' + arrendada + '" placeholder="Arrendada">' +
        '</div>' +
      '</div>' + 
      '<div class="form-group">' +
        '<div class="input-group">' +
          '<span class="input-group-addon">' +
            '<i class="glyphicon glyphicon-tag"></i>' +
          '</span>' +
          '<input type="text" id="editar_unidades" class="form-control" value="' + unidades + '" placeholder="Unidades">' +
        '</div>' +
      '</div>',
      buttons: {
        cancel: {
          label: 'Cancelar',
          className: 'btn btn-default',
          callback: function() {
            bootbox.hideAll();
          }
        },
        ok: {
          label: 'Guardar',
          className: 'btn btn-primary',
          callback: function(e) {
            e.preventDefault();
            $.ajax({
              url: 'asignaturas/listarAsignaturas',
              method: 'get',
              cache: false
            })
            .done((data) => {
              tabla
                .clear()
                .rows.add(data.data)
                .draw();
            });

            $.ajax({
              url: 'asignaturas/editar',
              method: 'post',
              data: {
                idPelicula: id,
                nombre: $('#editar_nombre').val(),
                sinopsis: $('#editar_sinopsis').val(),
                fechaEstreno: $('#editar_fechaEstreno').val(),
                genero: $('#editar_genero').val(),
                arrendada: $('#editar_arrendada').val(),
                unidades: $('#editar_unidades').val()
              }
            })
            .fail(function(err) {
              notificacion('Error al editar la asignatura: ' + err, 'error');
            })
            .done(function(data) {
              notificacion(data.mensaje, 'success');
            });
            ;
          }
        }
      }

    });
    // Redireccionar a vista de edición
    // location.href = '/asignaturas/editar/' + id;
  }

  function btnEliminarEvent() {
    var fila = $(this).closest('tr'),
    asignatura = tabla.row(fila).data(),
    id = asignatura.idPelicula
    ;
    bootbox.confirm('¿Estás seguro que deseas <b>eliminar</b> esta pelicula?', function(confirm) {
      console.log(id);
      if(confirm) {
        // Eliminar dato de la tabla
        tabla.row(fila).remove().draw();

        // Realizar petición ajax para eliminar
        $.ajax({
          url: 'asignaturas/eliminar',
          method: 'POST',
          data: {id: id}
        })
        .fail(function(err) {
          notificacion('Error al eliminar la pelicula: ' + err, 'error');
        })
        .done(function(data) {
          notificacion(data.mensaje, 'success');
        });
      }
    });
  }

  function notificacion(mensaje, tipo) {
    // Generar notificación.
    noty({
      text: mensaje,
      dismissQueue: true,
      force: true,
      animation: {
        open  : 'animated fadeIn',
        close : 'animated fadeOut',
        easing: 'swing',
        speed : 500
      },
      layout: 'center',
      theme: 'bootstrapTheme',
      type: tipo,
      timeout: 1500
    });
  }
});