<?php

use App\Services\Partition\TablePartition;
use Illuminate\Database\Eloquent\Model;

// Group the test
uses()->group('unit', 'dbTablePartition');


test("check given partition table exists with checkTablePartition in db",function(){


    $dbPartition = new class extends Model {

        use App\Traits\DbPartition;
    };

    $this->assertFalse($dbPartition->checkTablePartition('unknown_table'));

});


test("create alpha partition table if not exists",function(){

    $dbPartition = new class extends Model {

        use App\Traits\DbPartition;

        protected string $baseTable = 'sub_mogous';

        protected string $partition_prefix = 'sub_mogous';
    };

    $dbPartition->createPartition();

    $this->assertTrue($dbPartition->checkTablePartition('alpha_sub_mogous'));

});

test("create beta partition table cuz alpha already exists",function(){

    $dbPartition = new class extends Model {

        use App\Traits\DbPartition;

        protected string $baseTable = 'sub_mogous';

        protected string $partition_prefix = 'sub_mogous';

    };

    $dbPartition->createPartition(); // creating alpha partition table
    $dbPartition->createPartition();  // creating beta partition table

    $this->assertTrue($dbPartition->checkTablePartition('beta_sub_mogous'));

});

test("increase the locked partition table to 3",function(){

    $dbPartition = new class extends Model {

        use App\Traits\DbPartition;

        protected string $baseTable = 'sub_mogous';

        protected string $partition_prefix = 'sub_mogous';

    };

    $dbPartition->createPartition(); // creating alpha partition table
    $dbPartition->createPartition();  // creating beta partition table

    TablePartition::setLockedRotation(3);

    $dbPartition->createPartition();  // creating gamma partition table

    $this->assertTrue($dbPartition->checkTablePartition('gamma_sub_mogous'));

    TablePartition::setLockedRotation(2);


});
