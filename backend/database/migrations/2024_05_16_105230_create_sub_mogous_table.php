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
        Schema::create('sub_mogous', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('description');
            $table->string('cover');

            $table->integer('status')->default(0);
            $table->integer("chapter_number");
            $table->unsignedBigInteger('views')->default(0);

            $table->integer('subscription_only')->default(0);
            $table->json('subscription_collection')->nullable();

            $table->foreignId('mogou_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sub_mogous');
    }
};
