<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;

class DocumentController extends Controller
{
    public function fetch(Request $request) 
    {
        $documents = Document::all();
        return $documents;
    }

    public function store(Request $request)
    {
        $document = new Document();
        $document->name = $request['name'];
        $document->user_id = $request['creator_id'];
        $document->save();
    }
}
