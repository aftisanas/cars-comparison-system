<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class testcode extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'testcode';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        //
        // echo 'hellooo';

        Schema::table('feedback', function (Blueprint $table) {
            // $table->id();
            // $table->string('name');
            // $table->string('email');
            // $table->text('message');
            // $table->foreignId('comparison_id')->constrained('comparisons');
            // $table->foreignId('user_id')->constrained('users');
            // $table->timestamps();

            
            $table->string('identifier')->after('message');
        });

    }
}
