<?php

declare(strict_types=1);

namespace App\Application\Command\RoadRunner;

use Spiral\Cqrs\QueryInterface;

/**
 * Get config of the RoadRunner server.
 */
final class GetConfigQuery implements QueryInterface
{
    public function __construct(
        public readonly string $server,
    ) {
    }
}
