<?php

namespace App\Http\Controllers;

use Closure;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    public function auth(Request $request)
    {
        $creds = $request->validate([
            'name' => 'required',
            'password' => 'required',
        ]);

        if (Auth::attempt($creds)) {
            $request->session()->regenerate();

            return response()->json(Auth::user());
        }

        return response()->json([
            'username' => 'username not found',
        ], 400);
    }

    public function register(Request $request)
    {
        $password = Hash::make($request->password);
        $user = new User;
        $user->name = $request['name'];
        $user->password = $password;
        $user->email = $request['email'];
        $user->standort = $request['standort'];
        $user->oe = $request['oe'];
        $user->costcenter_id = $request['costcenter_id']; 
        $user->chef_id = $request['chef_id'];
        $user->save();
        return response()->json($user);
    }
}
