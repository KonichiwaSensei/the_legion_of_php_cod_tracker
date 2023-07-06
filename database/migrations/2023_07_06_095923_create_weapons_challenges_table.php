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
        Schema::create('weapons_challenges', function (Blueprint $table) {
            $table->id();
            $table->foreignId('challeng_id');
            $table->string('is_mastery');
            $table->foreignId('weapon_id');
            $table->timestamps();
           
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('weapons_challenges');
    }
};
