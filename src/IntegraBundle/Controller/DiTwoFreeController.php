<?php

namespace IntegraBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DiTwoFreeController extends Controller
{
    public function indexAction()
    {
        return $this->render('IntegraBundle:DiTwoFree:index.html.twig');
    }
}
