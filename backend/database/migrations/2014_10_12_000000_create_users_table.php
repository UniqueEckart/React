<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string("standort");
            $table->string("oe");
            $table->unsignedBigInteger("costcenter_id");
            $table->unsignedBigInteger("chef_id");
            $table->rememberToken();
            $table->timestamps();

            $table->foreign("costcenter_id")->references("id")->on("cost_centers");

            $table->foreign("chef_id")->references("id")->on("users");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
