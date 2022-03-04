<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use Illuminate\Http\Request;

class PermissionsController extends Controller
{
    public function index()
    {
        return Permission::all();
    }

    public function store(Request $request)
    {
        try {
            $existingPermission = Permission::where('title','=',$request->title)->first();
            if(!$existingPermission){
                $permission = new Permission();
                $permission->title = $request->title;
                if ($permission->save()) {
                    return response()->json(['status' => 'success', 'message' => 'Permission created successfully']);
                }
            }else{
                return response()->json(['status' => 'error', 'message' => $request->title.' permission already exit!']);
            }


        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $existingPermission = Permission::where('title','=',$request->title)->where('id','!=',$id)->first();
            if(!$existingPermission) {
                $permission = Permission::findOrFail($id);
                $permission->title = $request->title;

                if ($permission->save()) {
                    return response()->json(['status' => 'success', 'message' => 'Permission updated successfully']);
                }
            }else{
                return response()->json(['status' => 'error', 'message' => $request->title.' permission already exit!']);
            }
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
        }
    }

    public function destroy($id)
    {
        try {
            $permission = Permission::findOrFail($id);

            if ($permission->delete()) {
                return response()->json(['status' => 'success', 'message' => 'permission deleted successfully']);
            }
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
        }
    }
}
