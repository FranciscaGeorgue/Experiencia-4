<?php
if(!defined('BASEPATH')) exit('No direct script access allowed');

class Asignaturas_model extends CI_Model {
  
  public function __construct() {
    parent::__construct();
  }

  public function set_asignatura($cod, $nom, $sinopsis, $fecha, $genero, $arrendada, $unidades) {
    $data = array(
      'idPelicula' => $cod,
      'nombre' => $nom,
      'snopsis' => $sinopsis,
        'fechaEstreno' => $fecha,
        'genero' => $genero,
        'arrendada' => $arrendada,
        'unidades' => $unidades
    );

    $this->db->insert('pelicula', $data);
  }

  public function delete_asignatura($cod) {
    $data = array(
      'idPelicula' => $cod
    );

    $this->db->delete('pelicula', $data);
  }

  public function update_asignatura($cod, $nom, $sinopsis, $fecha, $genero, $arrendada, $unidades) {
    $this->db->set('nombre', $nom);
    $this->db->set('sinopsis', $sinopsis);
      $this->db->set('fechaEstreno', $fecha);
      $this->db->set('genero', $genero);
      $this->db->set('arrendada', $arrendada);
      $this->db->set('unidades', $unidades);
    $this->db->where('idPelicula', $cod);
    $this->db->update('pelicula');
  }

  public function get_asignaturas() {
    $this->db->select('*');
    $this->db->from('pelicula');
    //$this->db->order_by('codigo DESC');
    $query = $this->db->get();

    if($query->num_rows() > 0) {
      return $query;
    } else {
      return false;
    }
  }
}

?>