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
        //
        Schema::table('events', function (Blueprint $table) {
            $table->dropColumn('location');
            $table->string('city')->nullable();
            $table->string('street')->nullable();
            $table->string('address')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::table('events', function (Blueprint $table) {
            $table->string('location')->nullable();
            $table->dropColumn(['city', 'street', 'address']);
        });
    }
};
