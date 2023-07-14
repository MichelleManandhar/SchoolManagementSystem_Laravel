<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ClassDetail extends Model
{
    protected $table="classes";

    public function subject(){
        return $this->belongsToMany('App\Subject');
    }

    public function examDetail(){
        return $this->hasMany('Exam_detail');
    }
}
