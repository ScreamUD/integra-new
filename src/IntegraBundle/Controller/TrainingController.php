<?php

namespace IntegraBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class TrainingController extends Controller
{
    public function indexAction()
    {
        return $this->render('IntegraBundle:Training:training.html.twig');
    }
}
