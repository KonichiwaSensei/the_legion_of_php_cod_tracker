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
        Schema::create('profile_challenge_completions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('profile_id');
            $table->foreignId('weapons_challenges_id');
            $table->boolean('challenge_complete');
            $table->boolean('is_mastery');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profile_challenge_completions');
    }
};
