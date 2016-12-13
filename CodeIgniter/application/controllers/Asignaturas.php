<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Asignaturas extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	
	public function __construct() {
		parent::__construct();
		$this->load->model('Asignaturas_model');
	}

	public function vistaSimple() {
    $peliculas = $this->Asignaturas_model->get_asignaturas()->result();
    $data['asignaturas'] = $asignaturas;
    $this->load->view('tabla', $data);
	}	

	public function index() {
		$this->load->template('welcome_message');
	}

	public function listarAsignaturas() {
    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode(array('data' => ($this->Asignaturas_model->get_asignaturas() != false > 0 ? $this->Asignaturas_model->get_asignaturas()->result() : ''))));
			  
	}
	public function eliminar() {
		$cod = $this->input->post('idPeliculas');

		$this->Asignaturas_model->delete_asignatura($cod);
		$this->output
		  ->set_content_type('application/json')
		  ->set_output(json_encode(array('mensaje' => 'Pelicula eliminada satisfactoriamente.')));
	}

	public function agregar() {
		$cod = $this->input->post('idPelicula');
		$nom = $this->input->post('nombre');
		$sinopsis = $this->input->post('sinopsis');
        $fecha = $this->input->post('fechaEstreno');
        $genero = $this->input->post('genero');
        $arrendada = $this->input->post('arrendada');
        $unidades = $this->input->post('unidades');

		$this->Asignaturas_model->set_asignatura($cod, $nom, $sinopsis, $fecha, $genero, $arrendada, $unidades);
    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode(array('mensaje' => 'La pelicula se ha agregado satisfactoriamente.')));
	}

	public function editar() {
		$cod = $this->input->post('idPelicula');
		$nom = $this->input->post('nombre');
		$sinopsis = $this->input->post('sinopsis');
        $fecha = $this->input->post('fechaEstreno');
        $genero = $this->input->post('genero');
        $arrendada = $this->input->post('arrendada');
        $unidades = $this->input->post('unidades');
        
        $this->Asignaturas_model->update_asignatura($cod, $nom, $sinopsis, $fecha, $genero, $arrendada, $unidades);
		// La asignatura se ha editado satisfactoriamente.
    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode(array('mensaje' => 'La pelicula se ha editado satisfactoriamente.')));
	}
}
