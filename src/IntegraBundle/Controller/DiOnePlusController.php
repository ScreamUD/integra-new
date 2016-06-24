<?php

namespace IntegraBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DiOnePlusController extends Controller
{
    public function indexAction()
    {
        return $this->render('IntegraBundle:DiOnePlus:index.html.twig');
    }
}
