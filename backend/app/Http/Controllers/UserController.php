<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\In;

class UserController extends Controller
{
    public function fetch(Request $request)
    {
        $user = User::all();
        return response()->json($user);
    }

    public function fetchIndividual(Request $request,  User $id)
    {
        return response()->json($id);
    }
}
