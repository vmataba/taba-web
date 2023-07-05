import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class RepositoryFilterPipe implements PipeTransform {
  transform(repositories: any[], keyword: string) {
    return [...repositories]
    .filter((repository) => {
      return JSON.stringify(repository).toLowerCase().includes(keyword.toLowerCase())
    });
  }
}
