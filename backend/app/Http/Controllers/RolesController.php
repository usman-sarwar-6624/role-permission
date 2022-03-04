<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\RolePermission;
use Illuminate\Http\Request;

class RolesController extends Controller
{
    public function index()
    {
        return Role::all();
    }

    public function store(Request $request)
    {
        try {
            $existingRole = Role::where('title','=',$request->title)->first();
            if(!$existingRole){
                $role = new Role();
                $role->title = $request->title;
                if ($role->save()) {
                    return response()->json(['status' => 'success', 'message' => 'Role created successfully']);
                }
            }else{
                return response()->json(['status' => 'error', 'message' => $request->title.' role already exit!']);
            }


        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $existingRole = Role::where('title','=',$request->title)->where('id','!=',$id)->first();
            if(!$existingRole) {
                $role = Role::findOrFail($id);
                $role->title = $request->title;

                if ($role->save()) {
                    return response()->json(['status' => 'success', 'message' => 'Role updated successfully']);
                }
            }else{
                return response()->json(['status' => 'error', 'message' => $request->title.' role already exit!']);
            }
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
        }
    }

    public function destroy($id)
    {
        try {
            $role = Role::findOrFail($id);

            if ($role->delete()) {
                return response()->json(['status' => 'success', 'message' => 'Role deleted successfully']);
            }
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
        }
    }
    public function permissionsAssign(Request $request, $id)
    {
        try {
            $existingRole = RolePermission::where('role_id','=',$id)->delete();
            $permissions = $request->_permissions_ids;
            foreach ($permissions as $permission){
                $rolePermission = new RolePermission();
                $rolePermission->role_id = $id;
                $rolePermission->permission_id = $permission;
                $rolePermission->save();
            }
            return response()->json(['status' => 'success', 'message' => 'Role permissions updated successfully']);

        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
        }
    }
}
