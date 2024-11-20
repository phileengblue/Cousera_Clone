<?php

namespace App\Http\Controllers;

use App\Models\Filestorage;
use Illuminate\Http\Request;

class FilestorageController extends Controller
{
    public static function storeFile(Request $request, $folder, $fileInputName, $type)
    {
        if ($request->hasFile($fileInputName)) {
            $file = $request->file($fileInputName);
            $fileName = time() . '_' . $file->getClientOriginalName();
            $filePath = $file->storeAs($folder, $fileName, 'public');

            return Filestorage::create([
                'path' => $filePath,
                'name' => $fileName,
                'extension' => $file->getClientOriginalExtension(),
                'type' => $type,
            ]);
        }

        return null;
    }

    /*public function storeImage(Request $request)
    {
        $request->validate([
            'file_img' => 'required|image|mimes:jpeg,png,jpg,svg|max:2048',
        ]);
        // Chiama la funzione storeFile all'interno dello stesso controller
        $image = $this->storeFile($request, 'image/general', 'file_img', 'image');

        // Verifica se il caricamento è stato completato
        if ($image) {
            return response()->json([
                'message' => 'File caricato con successo!',
                'data' => $image,
            ], 201);
        } else {
            return response()->json([
                'message' => 'Errore nel caricamento del file.',
            ], 400);
        }
    }*/

    
    public function getFileDataById($id)
    {
        // Trova il record Filestorage tramite l'ID
        $fileStorage = Filestorage::find($id);
 
        // Controlla se il file esiste
        if ($fileStorage) {
            return response()->json([
                'file' => [
                    'path' => $fileStorage->path,
                    'name' => $fileStorage->name,
                    'extension' => $fileStorage->extension,
                    'type' => $fileStorage->type,
                    'url' => asset('storage/' . $fileStorage->path),
                ],
                'message' => 'File data retrieved successfully.'
            ], 200);
        } else {
            return response()->json([
                'message' => 'File not found.'
            ], 404);
        }
    }
}
