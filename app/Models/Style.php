<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Style extends Model
{
    use HasFactory;

    public $timestamps = false;
    
    public function store() {
    	return $this->belongsTo(Store::class);
    }
}
