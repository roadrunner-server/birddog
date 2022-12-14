<?php

declare(strict_types=1);

namespace App\Application\Command\Service;

use Spiral\Cqrs\QueryInterface;

final class StatusQuery implements QueryInterface
{
    public function __construct(
        public readonly string $server,
        public readonly string $service,
    ) {
    }
}
