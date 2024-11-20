<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Laratrust\Contracts\LaratrustUserInterface;
use Laratrust\Traits\LaratrustUserTrait;
use Laratrust\Traits\HasRolesAndPermissions;
use Tymon\JWTAuth\Contracts\JWTSubject;


class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;
    use HasFactory;
    use LaratrustUserTrait;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'firstname',
        'lastname',
        'birth_date',
        'gender',
        'phone_number',
        'filestorage_id',
        'email',
        'password',
        'institution_name',
        'institution_type',
        'job_role',
        'department',
        'needs',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function filestorage(){

        return $this->belongsTo(Filestorage::class, 'filestorage_id','id');
    }

    public function achievements()
    {
        return $this->belongsToMany(Achievement::class, 'certificates')
                    ->withTimestamps();
    }

    public function review(){

        return $this->hasMany(Review::class, 'id','user_id');
    }

    public function views(){

        return $this->hasMany(View::class, 'id','user_id');
    }

    public function courses()
    {
        return $this->belongsToMany(Course::class, 'course_users')
                    ->withPivot('is_professor')
                    ->withTimestamps();
    }

    // public function roles()
    // {
    //     return $this->belongsToMany(Role::class, 'user_roles')
    //                 ->withTimestamps();
    // }

    public function skills()
    {
        return $this->belongsToMany(Skill::class, 'user_skills')
                    ->withTimestamps();
    }

    public function certificates(){

        return $this->hasMany(Certificate::class, 'id','user_id');
    }

    public function course_users()
    {
        return $this->hasMany(CourseUser::class, 'id','user_id');
    }

    // public function role_users()
    // {
    //     return $this->hasMany(RoleUser::class, 'id','user_id');
    // }

    public function skill_user()
    {
        return $this->hasMany(SkillUser::class, 'id','user_id');
    }
}
