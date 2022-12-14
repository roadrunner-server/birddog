<?php

declare(strict_types=1);

namespace App\Application\Command\RoadRunner;

use Spiral\Cqrs\QueryInterface;

/**
 * Get version of the RoadRunner server.
 */
final class GetVersionQuery implements QueryInterface
{
    public function __construct(
        public readonly string $server,
    ) {
    }
}
