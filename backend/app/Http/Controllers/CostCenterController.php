<?php

namespace App\Http\Controllers;

use App\Models\CostCenter;
use App\Models\User;
use Illuminate\Http\Request;

class CostCenterController extends Controller
{
    public function fetch(Request $request)
    {
        $cost_centers = CostCenter::all();
        return response()->json($cost_centers);
    }

    public function update(Request $request, CostCenter $cost, User $user)
    {
        print($cost);
        print($user);
        $user->costcenter_id = $cost->id;
        $user->save();
        return response()->json($user);
    }
}
