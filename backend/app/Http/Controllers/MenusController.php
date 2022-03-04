<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;

class MenusController extends Controller
{
    public function index()
    {
        return Menu::all();
    }

    public function store(Request $request)
    {
        try {
            $existingMenu = Menu::where('title','=',$request->title)->where('role_id','=',$request->role_id)->first();
            if(!$existingMenu){
                $menu = new Menu();
                $menu->title = $request->title;
                $menu->role_id = $request->role_id;
                $menu->route_name = $request->route_name;
                if ($menu->save()) {
                    return response()->json(['status' => 'success', 'message' => 'Menu created successfully']);
                }
            }else{
                return response()->json(['status' => 'error', 'message' => $request->title.' menu already exit!']);
            }


        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $existingMenu = Menu::where('title','=',$request->title)->where('role_id','=',$request->role_id)->where('id','!=',$id)->first();
            if(!$existingMenu) {
                $menu = Menu::findOrFail($id);
                $menu->title = $request->title;
                $menu->role_id = $request->role_id;
                $menu->route_name = $request->route_name;
                if ($menu->save()) {
                    return response()->json(['status' => 'success', 'message' => 'Menu updated successfully']);
                }
            }else{
                return response()->json(['status' => 'error', 'message' => $request->title.' menu already exit!']);
            }
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
        }
    }

    public function destroy($id)
    {
        try {
            $menu = Menu::findOrFail($id);

            if ($menu->delete()) {
                return response()->json(['status' => 'success', 'message' => 'Menu deleted successfully']);
            }
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
        }
    }
}
