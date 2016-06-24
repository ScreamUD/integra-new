<?php

namespace IntegraBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class IndexController extends Controller
{
    public function indexAction()
    {
        return $this->render('IntegraBundle:Index:index.html.twig');
    }
}
