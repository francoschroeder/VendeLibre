<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    use HasFactory;

    public $timestamps = false;

    public function user() {
    	return $this->belongsTo(User::class);
    }

    public function items() {
    	return $this->hasMany(Item::class);
    }

    public function style() {
    	return $this->hasOne(Style::class);
    }
}
